# Generated by Django 4.0.10 on 2023-06-25 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ApiKeys',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.IntegerField()),
                ('api_key', models.CharField(max_length=200)),
            ],
        ),
    ]
