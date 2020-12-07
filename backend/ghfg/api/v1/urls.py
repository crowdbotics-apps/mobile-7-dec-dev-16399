from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserssViewSet

router = DefaultRouter()
router.register("userss", UserssViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
