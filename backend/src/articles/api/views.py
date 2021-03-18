from rest_framework import viewsets
from articles.models import Article
from .serializers import ArticleSerilizer
from rest_framework.response import Response
from rest_framework import status


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerilizer
    queryset = Article.objects.all()

    


"""
from rest_framework.generics import (ListAPIView,   
                                     RetrieveAPIView,
                                     CreateAPIView,
                                     DestroyAPIView,
                                     UpdateAPIView)
class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerilizer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerilizer

class ArticleCreateView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerilizer

class ArticleUpdateView(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerilizer

class ArticleDeleteView(DestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerilizer
"""
