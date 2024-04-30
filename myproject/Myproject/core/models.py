from django.db import models
from django.contrib.auth.models import AbstractUser

class Zapatilla(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=100)
    talla = models.IntegerField()
    stock = models.IntegerField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.marca} {self.modelo} - Talla {self.talla}"


class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True, verbose_name='Id de la categoría')
    nombre_categoria = models.CharField(max_length=60, verbose_name='Categoría')

    def __str__(self):
        return self.nombre_categoria

class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True, verbose_name='ID del Producto')
    nombre = models.CharField(max_length=60, verbose_name='Nombre')
    modelo = models.CharField(max_length=60, verbose_name='Modelo')
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, verbose_name='Categoría')
    imagen = models.ImageField(upload_to='productos/', null=True, blank=True, verbose_name='Imagen del Producto')
    talla = models.CharField(max_length=10, verbose_name='Talla')
    precio = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio')
    stock = models.IntegerField(verbose_name='Stock')

    def __str__(self):
        return f'{self.nombre} {self.modelo} - {self.talla}'


class Usuario(AbstractUser):
    run = models.IntegerField(unique=True, verbose_name='RUN')
    nombres = models.CharField(max_length=60, verbose_name='Nombres')
    apellidos = models.CharField(max_length=60, verbose_name='Apellidos')
    perfil = models.IntegerField(null=True, blank=True, verbose_name='Perfil')

    def __str__(self):
        return f'{self.nombres} {self.apellidos}'
