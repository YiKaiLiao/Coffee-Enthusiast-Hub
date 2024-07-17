from django.db import models

class JournalEntry(models.Model):
    coffee_type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    rating = models.IntegerField()
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.coffee_type
