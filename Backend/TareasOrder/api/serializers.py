from rest_framework import serializers
from TareasOrder.models import TareasOrder

class TareasOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TareasOrder
        fields = '__all__'