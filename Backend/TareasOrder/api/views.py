from rest_framework import viewsets
from TareasOrder.models import TareasOrder
from TareasOrder.api.serializers import TareasOrderSerializer

class TareasViewset(viewsets.ModelViewSet):
    queryset = TareasOrder.objects.all()
    serializer_class = TareasOrderSerializer