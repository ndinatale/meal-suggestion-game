import { useState } from 'react'
import { Button, Card, CardContent, Typography, Container, Box, Stack } from '@mui/material'
import foodItems from './data/foodItems.json'

function App() {
  const [meal, setMeal] = useState({
    starch: '',
    protein: '',
    vegetable: ''
  })

  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const generateMeal = () => {
    setMeal({
      starch: getRandomItem(foodItems.starches),
      protein: getRandomItem(foodItems.proteins),
      vegetable: getRandomItem(foodItems.vegetables)
    })
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: 'primary.main' }}>
        Meal Suggestion Game
      </Typography>
      
      <Card sx={{ mb: 4, bgcolor: 'background.paper' }}>
        <CardContent>
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle1" color="text.secondary">
                Starch
              </Typography>
              <Typography variant="h5">
                {meal.starch || 'Click generate to get a suggestion'}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" color="text.secondary">
                Protein
              </Typography>
              <Typography variant="h5">
                {meal.protein || 'Click generate to get a suggestion'}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" color="text.secondary">
                Vegetable
              </Typography>
              <Typography variant="h5">
                {meal.vegetable || 'Click generate to get a suggestion'}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          size="large"
          onClick={generateMeal}
          sx={{ 
            px: 4,
            py: 2,
            borderRadius: 2,
            fontSize: '1.2rem'
          }}
        >
          Generate Meal
        </Button>
      </Box>
    </Container>
  )
}

export default App
