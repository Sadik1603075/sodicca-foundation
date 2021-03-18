from contacts.api2.views import ContactViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ContactViewSet, basename='contacts')
urlpatterns = router.urls

