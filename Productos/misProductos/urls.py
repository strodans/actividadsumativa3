from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, ZapatillaViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)
router.register(r'zapatillas', ZapatillaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
