from django.db import models

# Create your models here.
class TareasOrder(models.Model):
    titulo = models.CharField()
    descripcion = models.TextField()
    created = models.DateField(auto_now=True)
    updated = models.DateField(auto_now=True)
    
    def __str__(self):
        return self.titulo