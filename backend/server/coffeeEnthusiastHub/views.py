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
    response = requests.get('https://coffee.alexflipnote.dev/random')
    data = response.json()
    return Response(data)
