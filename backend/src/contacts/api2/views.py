from rest_framework import viewsets
from contacts.models import Contact
from .serializers import ContactSerilizer


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerilizer
    queryset = Contact.objects.all()

