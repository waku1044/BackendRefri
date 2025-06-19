

// El Big Boss
export const bigBoss = async (req, res)=>{
    const { user, password } = await req.body;
    console.log(user, password)
    try {
      if(user && password){
        if(user === 'walter' && password === '12345'){
           res.status(200).json({message:'Confirmado.'})
        }else{
        res.status(401).json({message:'Usuario / Contraseña incorrectos'})
      }
    }else{
      res.status(400).json({message:'Debe completar los campos.'})
    }
    } catch (error) {
       res.status(500).json({ message: 'Error del servidor', error: error.message })
    }
  }