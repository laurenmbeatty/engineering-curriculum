import React from 'react'
import './App.css'
import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  Notes,
} from 'spectacle'

import chris from './assets/chris.png'
import lauren from './assets/lauren.png'
import william from './assets/william.png'
import grid from './assets/grid.png'
import pie from './assets/pie.png'
import tree from './assets/tree.png'
import npm from './assets/npm.png'

function App() {
  return (
    <Deck>
      <Slide>
        <FlexBox
          flexDirection="column"
          flexGrow={1}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading fontSize="5rem" textAlign="left">
            TD-Stylekit
          </Heading>
          <Text fontSize="4rem">
            Improving the Customer and Developer Experience
          </Text>
          <Text fontSize="2rem">
            Lauren Beatty, Senior Frontend Engineer and Team Lead
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          flexGrow={0.5}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading>TEAM_SCREAMING_SNAKE 🐍</Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <FlexBox flexDirection="column">
              <Image alt="Chris Jaure" src={chris} className="img" />
              <Text>Chris Jaure</Text>
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image alt="William Gonzalez" src={william} className="img" />
              <Text>William Gonzalez</Text>
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image alt="Lauren Beatty" src={lauren} className="img" />
              <Text>Lauren Beatty</Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem">Overview</Heading>
          <OrderedList>
            <ListItem>What is Stylekit? 🎨</ListItem>
            <ListItem>Who do we serve? 🤷‍♀️</ListItem>
            <ListItem>CX/UX/DevX? 👩‍💻</ListItem>
          </OrderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">What is td-stylekit?</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Common set of Components used across our FE products
          </Heading>
          <Grid gridGap="20px" gridTemplateAreas="'header header' 'left right'">
            <Image alt="css grid" src={grid} className="img-header" />
            <Image alt="pie chart" src={pie} className="img-left" />
            <Image alt="tree" src={tree} className="img-right" />
          </Grid>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Published on npm
          </Heading>
          <Box>
            <Image alt="npm" src={npm} />
          </Box>
        </FlexBox>
      </Slide>
    </Deck>
  )
}
export default App
