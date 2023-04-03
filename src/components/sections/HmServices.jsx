import React from 'react'
import { Grid, Typography, Paper, Hidden, Container } from '@mui/material'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import ComputerIcon from '@mui/icons-material/Computer'
import DescriptionIcon from '@mui/icons-material/Description'
import MultilineChartIcon from '@mui/icons-material/MultilineChart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import serviceCardDetails from '../../data/hmServicesData'
import { SectionHeader } from '../index'
import { Slide } from '@mui/material'
import { useStyles } from '../styles/sections/HmServices.styles'
import { useTheme } from '@mui/system'

const icons = [
  MultilineChartIcon,
  ComputerIcon,
  DescriptionIcon,
  PhoneIphoneIcon,
  ShoppingCartIcon,
  GroupAddIcon,
]

function HmServices(props) {
  const theme = useTheme()
  const classes = useStyles(props)
  const [inProp, setInProp] = React.useState(false)
  const servicesSlide = (entries, observer) => {
    const [entry] = entries
    // guard clause
    if (!entry.isIntersecting) return
    if (entry.isIntersecting) {
      setInProp(true)
      observer.unobserve(entry.target)
    }
  }
  const servicesObserver = new IntersectionObserver(servicesSlide, {
    root: null,
    threshold: 0.2,
  })

  React.useEffect(() => {
    const target = document.querySelector('#services')
    servicesObserver.observe(target)
    return () => {
      servicesObserver.unobserve(target)
    }
  }, [])

  return (
    <div className={classes.root} id="services">
      <Container maxWidth="xl">
        {/* Section title only shows on mobile */}
        <Hidden smUp>
          <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
        </Hidden>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.cardWrapper}
        >
          <Hidden xsDown>
            <Grid
              container
              direction="row"
              justifyContent="center"
              className={classes.sectionTitle}
            >
              <SectionHeader title="Our Services" subTitle="Let us Help build the Future!" />
            </Grid>
          </Hidden>
          {serviceCardDetails.map((service, index) => {
            const Icon = icons[index]
            const cardStyles = [
              {
                mt: 0,
                mb: 0,
                ml: 0,
                minHeight: '250px',
                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
              {
                mt: 0,
                mb: 0,
                minHeight: '250px',

                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
              {
                mt: 0,
                mr: 0,
                mb: 0,
                minHeight: '250px',

                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
              {
                mt: 1,
                minHeight: '250px',

                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
              {
                mt: 0,
                mb: 0,
                minHeight: '250px',

                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
              {
                mt: 0,
                minHeight: '250px',

                [theme.breakpoints.down('md')]: {
                  m: 1,
                },
              },
            ]
            return (
              <Slide
                key={service.id}
                direction={index >= 0 && index <= 2 ? 'right' : 'left'}
                in={inProp}
                mountOnEnter
                unmountOnExit
                timeout={3000}
              >
                <Paper
                  elevation={10}
                  id={`card_${index}`}
                  sx={{
                    position: 'relative',
                    width: '400px',
                    m: 1,
                    height: 'auto',
                    py: '0.75rem',
                    px: '1.5rem',
                    backgroundColor: theme.palette.primary_300.main,
                    color: theme.palette.charcoal.secondary,
                    ...cardStyles[index],
                  }}
                >
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon className={classes.cardIcon} />
                    {service.serviceTitle}
                  </Typography>
                  <Typography paragraph>{service.serviceDescription}</Typography>
                </Paper>
              </Slide>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default HmServices
