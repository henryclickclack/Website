# Generated by Django 4.0.10 on 2023-06-25 20:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0002_apikeys'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apikeys',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]