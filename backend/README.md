# Coffee Enthusiast Hub - Backend

This is the backend for the Coffee Enthusiast Hub application, built with Django. It provides API endpoints for fetching random coffee images and managing user journal entries.

## Requirements

- Python 3.x
- pip (Python package installer)
- Virtualenv (recommended)

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YiKaiLiao/Coffee-Enthusiast-Hub.git
   cd ./backend
   ```
2. **Create and activate a virtual environment (optional but recommended):**
   ```sh
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```
3. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```
4. **Apply database migrations:**
   ```sh
   python manage.py migrate
   ```
5. **Access the API:**
   ```sh
   Open your browser and navigate to http://127.0.0.1:8000 to access the API endpoints.
   ```

## API Endpoints

`GET /random-coffee-image/`: Fetches a random coffee image.
`GET /journal-entries/`: Retrieves all journal entries.
`POST /journal-entries/`: Creates a new journal entry.
`GET /journal-entries/:id/`: Retrieves a specific journal entry by ID.
`PUT /journal-entries/:id/`: Updates a specific journal entry by ID.
`DELETE /journal-entries/:id/`: Deletes a specific journal entry by ID.