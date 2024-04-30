from rest_framework import viewsets
from .models import Producto, Zapatilla
from .serializers import ProductoSerializer, ZapatillaSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ZapatillaViewSet(viewsets.ModelViewSet):
    queryset = Zapatilla.objects.all()
    serializer_class = ZapatillaSerializer
