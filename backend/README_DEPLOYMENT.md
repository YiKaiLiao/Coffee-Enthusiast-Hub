# Deployment of Coffee Enthusiast Hub - Django server to AWS EC2

This document provides step-by-step instructions for deploying the Django server to AWS EC2.

## Prerequisites

- An AWS account
- A running EC2 instance (preferably with Ubuntu 24.04 LTS (HVM), SSD Volume Type)

## Steps

### 1. Launch an EC2 Instance

1. Log in to your AWS Management Console.
2. Navigate to EC2 Dashboard and click Launch Instance.
3. Choose an Amazon Machine Image (AMI), preferably Ubuntu.
4. Select an instance type (e.g., t2.micro for free tier).
5. Configure instance details and add storage as needed.
6. Configure the security group to allow HTTP (port 80), HTTPS (port 443), and SSH (port 22) traffic.
7. Review and launch the instance.
8. Download the key pair (e.g., your-key.pem).

### 2. Elastic IP

Before logging into your EC2 instance, it is important to first generate an Elastic IP and associate it to your EC2 instance.
Although the instance has a default public IP address assigned upon creation, that IP address is dynamic and does not persist if you stop and start the instance.

1. On the EC2 dashboard, look under the Network & Security tab and go to Elastic IPs:
2. Click on Allocate Elastic IP address.
3. Select Allocate.
4. This should create an Elastic IP.

### 3. Associate the Elastic IP to the instance

With the Elastic IP checked on the left side:

1. Go to Actions
2. Click on Associate Elastic IP address
3. Make sure your Resource type is Instance
4. Search for your instance (if this is your first time, it should be the only one)
5. Click Associate

### 4. Connect to Your EC2 Instance

```sh
ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-dns
```

### 5. Install Required Packages

```sh
sudo apt update
sudo apt upgrade
# Installing Python 3, PostgreSQL, Nginx and Gunicorn:
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx gunicorn curl
```

### 6. Clone Your Django Project

```sh
git clone https://github.com/YiKaiLiao/Coffee-Enthusiast-Hub.git
cd Coffee-Enthusiast-Hub/backend
```

### 7. Set Up Virtual Environment

```sh
# create a virtual environment called env
python3 -m venv env
# activate env
source env/bin/activate
```

### 8. Install Project Dependencies

```sh
cd server/
pip install -r requirements.txt
```

### 9. Configure Django Settings

Edit settings.py:

1. Set DEBUG = False
2. Set ALLOWED_HOSTS to include your domain or public IP
3. Set CORS_ALLOWED_ORIGINS to include your domain or public IP
4. Configure DATABASES for your production database

### 10. Set up Django Project

```sh
python3 manage.py makemigrations
python3 manage.py migrate
# collect static files
python3 manage.py collectstatic
```

### 11. Configure Gunicorn

1. Create a gunicorn.socket file:

```sh
sudo vim /etc/systemd/system/gunicorn.socket
```

2. Configure the `gunicorn.socket` file with:

```sh
[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock

[Install]
WantedBy=sockets.target
```

3. Configure the `gunicorn.service` file with:

```sh
sudo nano /etc/systemd/system/gunicorn.service
```

4. Use the configurations below:

```sh
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/Coffee-Enthusiast-Hub/backend/server
ExecStart=/home/ubuntu/Coffee-Enthusiast-Hub/backend/env/bin/gunicorn \
--access-logfile - \
--workers 3 \
--bind unix:/run/gunicorn.sock \
server.wsgi:application

[Install]
WantedBy=multi-user.target
```

5. Start and enable Gunicorn:

```sh
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
```

6. Check the status of gunicorn with:

```sh
sudo systemctl status gunicorn.socket
```

### 12. Configure Nginx

1. Create a new Nginx config file:

```sh
# command: sudo vim /etc/nginx/sites-available/<YOUR-PROJECT-NAME>
sudo vim /etc/nginx/sites-available/Coffee-Enthusiast-Hub
```

2. Use the configurations below (replace any of the ALL CAPS sections with your own project details):

```sh
server {
listen 80;
# server_name YOUR_INSTANCE_IP_ADDRESS; --> use the associated Elastic IP address
server_name 3.132.134.130;

location = /favicon.ico { access_log off; log_not_found off; }
location /static/ {
# root /home/ubuntu/<YOUR-PROJECT>; --> project folder is where your wsgi.py lies in
root /home/ubuntu/Coffee-Enthusiast-Hub/backend/server/server;
}

location /media/ {
# root /home/ubuntu/<YOUR-PROJECT>; --> project folder is where your wsgi.py lies in
root /home/ubuntu/Coffee-Enthusiast-Hub/backend/server/server;
}

location / {
include proxy_params;
proxy_pass http://unix:/run/gunicorn.sock;
}
}
```

3. Once your Nginx config is set up, make sure there are no syntax errors with:

```sh
sudo nginx -t
```

4. Create a soft link of your config file from sites-available to the sites-enabled directory.

This step is important because Nginx will use the configuration settings located at /etc/nginx/sites-available/default by default if there is nothing in sites-enabled.

```sh
# sudo ln -s /etc/nginx/sites-available/<YOUR-PROJECT-NAME> /etc/nginx/sites-enabled
sudo ln -sf /etc/nginx/sites-available/Coffee-Enthusiast-Hub /etc/nginx/sites-enabled
```

5. Test Nginx configuration and restart:

```sh
sudo nginx -t
sudo systemctl restart nginx
```

6. Make sure both Gunicorn and Nginx are running correctly:

```sh
sudo systemctl status gunicorn.socket
sudo systemctl status nginx
```

7. Troubleshooting

```sh
# Check Gunicorn logs:
sudo tail -n 50 /var/log/nginx/error.log
# Check Nginx logs:
journalctl -u gunicorn.service
```

### 13. Firewall Setup

1. Enable Firewall and allow OpenSSH

```sh
sudo ufw enable
sudo ufw allow OpenSSH
# allow required ports
sudo ufw allow 22/tcp       # SSH
sudo ufw allow 80/tcp       # HTTP
sudo ufw allow 443/tcp      # HTTPS
```

2.  Check `ufw` Status

```sh
sudo ufw status
```

3. Ensure it looks something like this:

```sh
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
443/tcp                    ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
22/tcp (v6)                ALLOW       Anywhere (v6)
80/tcp (v6)                ALLOW       Anywhere (v6)
443/tcp (v6)               ALLOW       Anywhere (v6)
```

### 14. Verify Deployment

Open your browser and navigate to your domain or public IP (http://your_domain.com or http://your_public_ip). You should see your Django application running. Alternatively, try sending a Http request to your public IP using Postman.
