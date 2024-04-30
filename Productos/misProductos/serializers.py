from rest_framework import serializers
from .models import Producto, Zapatilla

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class ZapatillaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zapatilla
        fields = '__all__'
