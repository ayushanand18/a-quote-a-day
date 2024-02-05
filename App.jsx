import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { Card, Title } from 'react-native-paper';

const backgroundImageUrl =
  'https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-1.jpg?width=580&format=webp';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  // Add more quotes here
];

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const handleNextClick = () => {
    setCurrentQuote(getRandomQuote());
  };

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.quoteText}>{currentQuote}</Title>
          </Card.Content>
        </Card>

        <Button title="Next" onPress={handleNextClick} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add a semi-transparent background color for better readability
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
  },
  quoteText: {
    textAlign: 'center',
  },
});

export default App;
