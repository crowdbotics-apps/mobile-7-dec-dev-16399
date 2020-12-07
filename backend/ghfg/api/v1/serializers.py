from rest_framework import serializers
from ghfg.models import Userss


class UserssSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userss
        fields = "__all__"
