from rest_framework.routers import DefaultRouter
from TareasOrder.api.views import TareasViewset

router = DefaultRouter()
router.register('tareas', TareasViewset, basename='tareas')
urlpatterns = router.urls
