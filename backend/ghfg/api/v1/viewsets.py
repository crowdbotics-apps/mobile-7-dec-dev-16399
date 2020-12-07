from rest_framework import authentication
from ghfg.models import Userss
from .serializers import UserssSerializer
from rest_framework import viewsets


class UserssViewSet(viewsets.ModelViewSet):
    serializer_class = UserssSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Userss.objects.all()
