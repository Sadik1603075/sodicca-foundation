from rest_framework import serializers

from contacts.models import Contact


ALL_FIELDS = '__all__'
class ContactSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        