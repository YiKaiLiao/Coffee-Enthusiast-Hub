from django.urls import path, include
from rest_framework.routers import DefaultRouter
from coffeeEnthusiastHub.views import JournalEntryViewSet, random_coffee_image, all_coffee_products

router = DefaultRouter()
router.register(r'journal-entries', JournalEntryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('random-coffee-image/', random_coffee_image, name='random-coffee-image'),
    path('get-coffee-products/', all_coffee_products, name='get-coffee-products'),
]
