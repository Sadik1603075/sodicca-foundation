
#from django.conf import settings
from django.db import models

#User = settings.AUTH_USER_MODEL

class Contact(models.Model):
    #user = models.ForeignKey(User,default=1,null=True,on_delete=models.SET_NULL)
   
    author = models.CharField(max_length=50,blank=True)
    email = models.EmailField()
    content = models.TextField()
    

   

    def __str__(self):
        return self.email
    