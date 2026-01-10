import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv('Titanic.csv')
# displaying basic information :
data.shape # no.of rows, no.of cols.
data.head() # the starting data

data.info() # any missing values 

data.isnull().sum()
# from the output i can clearly see, that age has 177 missing values, cabin has 687 missing values. 

data.describe() #shows the basic statistics

sns.countplot(x='Sex', hue='Survived', data=data)
plt.show()
#the plot shows that female passengers had a significantly higher survival rate compared to male passengers

sns.histplot(data['Age'], bins=30, kde=True)
plt.show()
# kde is kernel density estimation 

sns.countplot(x='Pclass', hue='Survived', data=data)
plt.show()

sns.scatterplot(x='Age', y='Fare', hue='Survived', data=data)
plt.title("Age vs Fare (Colored by Survival)")
plt.xlabel("Age")
plt.ylabel("Fare")
plt.show()
