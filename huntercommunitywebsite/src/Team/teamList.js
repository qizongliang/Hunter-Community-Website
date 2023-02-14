import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import avatar from './Assets/avatarImageplaceholder.png'
import Divider from '@mui/material/Divider'

const teamList = () => {
  return (
    <>
      <Typography sx={{ mt: 5 }} />
      <Grid container spacing={0}>
        <Grid item xs={6}>
          {/* style={{ display:'flex', justifyContent:'center' }} */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 450 }}>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    alt="Qi Zong Liang"
                    height="200"
                    src={avatar}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Qi Zong Liang
                    </Typography>

                    <Divider variant="fullWidth" />
                    <Typography variant="h6" color="text.secondary">
                      Fullstack Engineer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hello, I'm aspired software engineer. I want to one day
                      work in the field of cloud computing because I take
                      interest in distributed networking.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 450 }}>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    alt="Pramit Dey"
                    height="200"
                    src={avatar}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pramit Dey
                    </Typography>
                    <Divider variant="fullWidth" />
                    <Typography variant="h6" color="text.secondary">
                      Fullstack Engineer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hello, I'm aspired software engineer. I want to one day
                      work in the field of cloud computing because I take
                      interest in distributed networking.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
export default teamList
