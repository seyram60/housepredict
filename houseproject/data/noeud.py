import pandas as pd 
from sklearn.linear_model import LinearRegression 
from sklearn.model_selection import train_test_split 
import matplotlib.pyplot as plt 
from scipy import stats
import numpy as np
import seaborn as sns
import statsmodels.api as sm

from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.model_selection import cross_val_score



#################################################### Charger la dataset csv 
df = pd.read_csv("data/house_data.csv", delimiter=";")

#################################################### Convertir les noms des colums en miniscules 
df.columns = df.columns.str.lower()

#################################################### Suppression des colonnes non nécessaires pour mn analyse
df= df.drop(['status'], axis=1)
df= df.drop(['per_sqft'], axis=1)
df= df.drop(['locality'], axis=1)
df= df.drop(['parking'], axis=1)

################################################## GESTION DES VALEURS MANQUANTES
# 
# Identification des valeurs manquantes
missing_values = df.isnull().sum()
#print(missing_values)

#Supprimer les lignes contenant des valeurs manquantes
df  = df.dropna()


################################################## GESTION DES DOUBLONS
# Identifier les doublons
duplicates = df.duplicated()

# Afficher les lignes dupliquées
#print(duplicates)

# Supprimer les doublons
df_no_duplicates = df.drop_duplicates()

# Afficher le DataFrame 
#print(df.columns)
#print(df.head())


################################################# Gestion des valeurs aberrantes (outliers) pour les variables numériques

######### Price
# 1. Utiliser un Boxplot pour détecter les outliers visuellement
#sns.boxplot(x=df['price'])
#plt.show()

# 2. Détecter les outliers avec l'IQR
Q1 = df['price'].quantile(0.25)
Q3 = df['price'].quantile(0.75)
IQR = Q3 - Q1

# Définir les limites pour les outliers
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Identifier les outliers
outliers = df[(df['price'] < lower_bound) | (df['price'] > upper_bound)]
#print(outliers)


# Supprimer les outliers
df_cleaned = df[(df['price'] >= lower_bound) & (df['price'] <= upper_bound)]

#########  OU

# Imputer (Remplacer) les outliers avec la médiane (la moyenne ou la médiane des valeurs non aberrantes).
#median_price = df['price'].median()
#df['price'] = np.where((df['price'] < lower_bound) | (df['price'] > upper_bound), median_price, df['price'])


# ######## AREA 
# 1. Utiliser un Boxplot pour détecter les outliers visuellement
#sns.boxplot(x=df['area'])
#plt.show()

# 2. Détecter les outliers avec l'IQR
Q1 = df['area'].quantile(0.25)
Q3 = df['area'].quantile(0.75)
IQR = Q3 - Q1

# Définir les limites pour les outliers
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Identifier les outliers
outliers = df[(df['area'] < lower_bound) | (df['area'] > upper_bound)]
#print(outliers)


# Supprimer les outliers
#df_cleaned = df[(df['area'] >= lower_bound) & (df['area'] <= upper_bound)]

########   OU

# Imputer (Remplacer) les outliers avec la médiane (la moyenne ou la médiane des valeurs non aberrantes).
median_price = df['area'].median()
df['area'] = np.where((df['area'] < lower_bound) | (df['area'] > upper_bound), median_price, df['area'])


#################################################### Statistiques descriptives
stats = df.describe()
#print(stats)

################################################### CREATION DES GRAPHIQUES ##########################################

# Création du scatter plot area vs price
# plt.figure(figsize=(10, 6))
# plt.scatter(df['area'], df['price'], color='blue', alpha=0.6)
# plt.title('Scatter Plot des Prix en fonction de la Surface')
# plt.xlabel('Surface (en m²)')
# plt.ylabel('Prix (en dollars)')
# plt.grid(True)
#plt.show()

# Création du scatter plot avec une ligne de régression area vs price
# plt.figure(figsize=(10, 6))
# sns.regplot(data=df, x='area', y='price', scatter_kws={'color': 'blue', 'alpha': 0.6}, line_kws={'color': 'red'})
# plt.title('Scatter Plot des Prix en fonction de la Surface avec Ligne de Régression')
# plt.xlabel('Surface (en m²)')
# plt.ylabel('Prix (en dollars)')
# plt.grid(True)
# #plt.show()

# Création de l'histogramme des prix (Variable dépendante)
# plt.figure(figsize=(10, 6))
# sns.histplot(df['price'], bins=10, kde=True, color='blue', alpha=0.7)
# plt.title('Histogramme des Prix')
# plt.xlabel('Prix')
# plt.ylabel('Fréquence')
# plt.grid(True)
#plt.show()

################################## ENCODAGE DES VARIABLES QUALITATIVES
####### Voir les colonnes catégorielles
categorical_columns = df.select_dtypes(include=['object']).columns
#print(categorical_columns)
#['furnishing', 'transaction', 'type', 'city']




################################ DEFINITION DES VARIABLES DEPENDANTES ET INDEPENDANTES
# Variable dépendante
prices = df.price.values
# Variable indépendantes
# Sélectionner toutes les colonnes sauf 'price'
matrice_mere = df.loc[:, df.columns != 'price']
#print(matrice_mere.columns)
#['area', 'bhk', 'bathroom', 'furnishing', 'transaction', 'type', 'city'],

################################ SEKECTION DE FORMES FONCTIONNELLES

# Définir les modèles à tester





################################################################################################################


