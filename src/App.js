import React from 'react'
import './App.css'
import {
  FlexBox,
  Heading,
  OrderedList,
  ListItem,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  Notes,
  Link,
} from 'spectacle'

import chris from './assets/chris.png'
import lauren from './assets/lauren.png'
import william from './assets/william.png'
import grid from './assets/grid.png'
import pie from './assets/pie.png'
import tree from './assets/tree.png'
import npm from './assets/npm.png'
import primaryText from './assets/primaryText.png'
import heading from './assets/heading.png'
import badges from './assets/badges.png'
import datePicker from './assets/datePicker.png'
import formControl from './assets/formControl.png'
import cssGrid from './assets/cssGrid.png'
import modal from './assets/modal.png'
import dataGrid from './assets/dataGrid.png'
import treeTwo from './assets/treeTwo.png'
import storybook from './assets/storybook.png'
import checkboxGif from './assets/checkboxGif.gif'
import codeSnippet from './assets/codeSnippet.png'
import todo from './assets/todo.png'
import histoOne from './assets/histoOne.png'
import tooltips from './assets/tooltips.png'
import direction from './assets/direction.png'
import todoTests from './assets/todoTests.png'
import material from './assets/material.png'
import base from './assets/base.png'
import primer from './assets/primer.png'
import reach from './assets/reach.png'
import semantic from './assets/semantic.png'
import evangelize from './assets/evangelize.gif'
import document from './assets/document.png'
import histoTwo from './assets/histoTwo.png'
import histoThree from './assets/histoThree.png'
import build from './assets/build.gif'

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
        <Notes>
          <Text fontSize="2rem">
            Hi, everyone, and welcome! I'm excited to be here talking about
            TD-Stylekit
          </Text>
          <Text fontSize="2rem">
            My name is Lauren Beatty and I'm a Senior Frontend Engineer and Team
            Lead on the Frontend Team. I've been with Treasure Data for 2 years
            now
          </Text>
        </Notes>
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
        <Notes>
          <Text fontSize="2rem">
            Within the Frontend team we have several sub-teams now, and the team
            I lead is TEAM_SCREAMING_SNAKE. We cover Integrations Hub, and are
            the owners of TD-Stylekit
          </Text>
          <Text fontSize="2rem">
            This is a really different structure from when I started. I think
            when I started 2 years ago there were 6 of us(?) working under Mike
            McElroy, and we were all just one little team. It has important
            implications for how we work now, and how we think about how we
            develop in Stylekit.
          </Text>
        </Notes>
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
        <Notes>
          <Text fontSize="2rem">
            Today I'm going to talk about Stylekit. What is it? Who are the
            customers we serve? and finally, I'll do more of a deep-dive into
            how we think about the Developer Experience.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">What is td-stylekit?</Heading>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">So, what is td-stylekit?</Text>
        </Notes>
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
        <Notes>
          <Text fontSize="2rem">
            Stylekit is really 2 things. 1. it's the component library that's
            used in our FE products and beyond, and 2. it's the documentation of
            those components that's really intended for both our Design team and
            our FE Team.
          </Text>
        </Notes>
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
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            Automated Release
          </Heading>
          <OrderedList>
            <ListItem>
              Via{' '}
              <Link
                href="https://github.com/semantic-release/semantic-release"
                target="_blank"
              >
                semantic-release
              </Link>
            </ListItem>
            <ListItem>Fully automated</ListItem>
            <ListItem>
              Follows{' '}
              <Link href="https://semver.org/" target="_blank">
                Semantic Versioning
              </Link>
            </ListItem>
            <ListItem>Automatic Changelog</ListItem>
          </OrderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Text-based Components
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={primaryText} />
            <Image src={heading} />
          </FlexBox>
          <Image src={badges} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Form Elements
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={datePicker} />
            <Image src={formControl} />
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Layout Components
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={cssGrid} width="40%" height="auto" />
            <Image src={modal} width="45%" height="auto" />
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Display and Interact with Data
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={dataGrid} />
            <Image src={treeTwo} width="35%" height="auto" />
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Robust <br /> Documentation
          </Heading>
          <Box>
            <Image alt="npm" src={storybook} />
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            What is Storybook
          </Heading>
          <OrderedList>
            <ListItem>Open Source tool for developing UI components</ListItem>
            <ListItem>React, Vue, Angular</ListItem>
            <ListItem>Component Sandbox</ListItem>
          </OrderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-between" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Interactive <br /> Documentation
          </Heading>
          <Box>
            <Image alt="npm" src={checkboxGif} width="95%" />
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Code Snippets
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={codeSnippet} />
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">Who are our Customers?</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            Stylekit Customers
          </Heading>
          <OrderedList>
            <ListItem>Treasure Data Customers 💪</ListItem>
            <ListItem>UX Team 🎨</ListItem>
            <ListItem>Frontend Team 👩‍🎤</ListItem>
          </OrderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          flexGrow={1}
          alignContent="baseline"
          justifyContent="space-evenly"
        >
          <Heading fontSize="5rem">Goal</Heading>
          <Box width="60%">
            <Text fontWeight={700} fontSize="4.5rem">
              Fantastic Developer Experience ✨
            </Text>
          </Box>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Image src={todo} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Start with Design
          </Heading>
          <FlexBox justifyContent="space-evenly" width="80%">
            <FlexBox>
              <Image src={histoOne} />
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image src={tooltips} />
              <Image src={direction} width="95%" />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Write TODO Tests</Heading>
          <Image src={todoTests} width="70%" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="3rem">Look for API Design Inspiration</Heading>
          <FlexBox justifyContent="space-evenly" width="100%" flexGrow={1}>
            <FlexBox flexDirection="column">
              <Image src={material} />
            </FlexBox>
            <FlexBox
              flexDirection="column"
              height="100%"
              justifyContent="space-evenly"
            >
              <Image src={primer} />
              <Image src={base} />
              <Image src={reach} />
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image src={semantic} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Make it Flexible</Heading>
          <FlexBox justifyContent="space-evenly" flexGrow={1}>
            <Image src={histoTwo} width="45%" />
            <Image src={histoThree} width="45%" />
          </FlexBox>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Document</Heading>
          <Image src={document} width="70%" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Done! 🎉</Heading>
          <Image src={build} width="70%" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Evangelize</Heading>
          <Image src={evangelize} width="70%" />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">Thank you! 👋</Heading>
        </FlexBox>
      </Slide>
    </Deck>
  )
}
export default App
