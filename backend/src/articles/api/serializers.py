from rest_framework import serializers

from articles.models import Article


ALL_FIELDS = '__all__'
class ArticleSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        