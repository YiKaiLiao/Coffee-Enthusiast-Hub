# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import JournalEntry
from .serializers import JournalEntrySerializer
import requests

class JournalEntryViewSet(viewsets.ModelViewSet):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer

@api_view(['GET'])
def random_coffee_image(request):
    response = requests.get('https://coffee.alexflipnote.dev/random.json')
    data = response.json()
    return Response(data)

@api_view(['GET'])
def all_coffee_products(request):
    response = requests.get('https://fake-coffee-api.vercel.app/api')
    data = response.json()
    return Response(data)

@api_view(['GET'])
def coffee_ingredients_data(request):
    coldCoffeeRes = requests.get('https://api.sampleapis.com/coffee/iced')
    hotCoffeeRes = requests.get('https://api.sampleapis.com/coffee/hot')
    
    if coldCoffeeRes.status_code == 200 and hotCoffeeRes.status_code == 200:
        cold_coffee_data = coldCoffeeRes.json()
        hot_coffee_data = hotCoffeeRes.json()
        merged_coffee_data = cold_coffee_data + hot_coffee_data
        return Response(merged_coffee_data, status=200)
    elif coldCoffeeRes.status_code == 200:
        data = coldCoffeeRes.json()
        return Response(data, status=200)
    elif hotCoffeeRes.status_code == 200:
        data = hotCoffeeRes.json()
        return Response(data, status=200)
    else:
        return Response({"error": "Unable to fetch data"}, status=500)
