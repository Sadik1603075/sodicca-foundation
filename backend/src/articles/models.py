
#from django.conf import settings
from django.db import models
from django.contrib.auth.models import User

#User = settings.AUTH_USER_MODEL

class Article(models.Model):
    user = models.ForeignKey(User,default=1,null=True,on_delete=models.SET_NULL)
    title  = models.CharField(max_length=100)
    content = models.TextField()
    author = models.CharField(max_length=50)
    image = models.ImageField(upload_to="static",blank=True, null=True)
    post_date = models.DateField(blank=True,null=True,auto_now_add=True)

   

    def __str__(self):
        return self.title
    