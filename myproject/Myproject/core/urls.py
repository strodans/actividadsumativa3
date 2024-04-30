from django.contrib import admin
from django.urls import path
from . import views
from .views import lista_zapatillas


urlpatterns = [
    path('zapatillas/', lista_zapatillas, name='lista_zapatillas'),
]
