from django.shortcuts import render
from .models import Zapatilla
def index(request):
    return render(request, 'my_app/index.html')


def lista_zapatillas(request):
    zapatillas = Zapatilla.objects.all()
    return render(request, 'zapatillas/lista_zapatillas.html', {'zapatillas': zapatillas})
