import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Picker, ImageBackground} from "react-native";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import users from "../helpers/users";



function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const [role, setRole] = useState("admin");
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (role === "admin") {
      if (data.user === "varelaa" && data.password === "Vare1010@") {
        navigation.navigate("Cuenta", { user: data.user });
        reset();
      } else if (data.user != "varelaa") {
        setError("Usuario incorrecto");
      } else if (data.password != "Vare1010@") {
        setError("Contraseña incorrecta");
      } else {
        setError("Datos incorrectos");
      }
    } else if (role === "user") {
      users.find((user) => {
        if (user.user === data.user && user.password === data.password) {
          navigation.navigate("Cuenta", { user: data.user });
          reset();
        } else if (user.user != data.user) {
          setError("Usuario incorrecto");
        } else if (user.password != data.password) {
          setError("Contraseña incorrecta");
        } else {
          setError("Datos incorrectos");
        }
      });
    } else {
      setError("Este usuario no esta registrado");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  return (
    
    <ImageBackground source={require("../assets/fondo.jpg")} style={styles.header}> 
      <Image style={styles.images} source={require("../assets/cards.png")} />
      <View>
        
        <Text style={{ color: "#4BA3DE", fontWeight: 700, fontSize: 35, textAlign: "center" }}>¡¡Bienvenido!!</Text>
        <Text style={{ color: "#4BA3DE", fontSize: 18, textAlign: "center"}}>SAFE BANC 💰</Text>
      
        <View style={styles.content}>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 20,
              minLength: 3,
              pattern: /^[A-Za-z]+$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.user?.type == "required" ||
                      errors.user?.type == "pattern" ||
                      errors.user?.type == "minLength" ||
                      errors.user?.type == "maxLength"
                        ? "red"
                        : "#53B4F5",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Usuario ..."
              />
            )}
            name="user"
          />

          {errors.user?.type == "required" && (
            <Text style={{ color: "red" }}>El usuario es requerido</Text>
          )}
          {errors.user?.type == "pattern" && (
            <Text style={{ color: "red" }}>Solo letras</Text>
          )}
          {errors.user?.type == "maxLength" && (
            <Text style={{ color: "red" }}>Máximo 20 caracteres</Text>
          )}
          {errors.user?.type == "minLength" && (
            <Text style={{ color: "red" }}>Minimo 3 caracteres</Text>
          )}

          <Picker
            selectedValue={role}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Usuario" value="user" />
          </Picker>

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 15,
              minLength: 8,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.password?.type == "required" ||
                      errors.password?.type == "pattern" ||
                      errors.password?.type == "minLength" ||
                      errors.password?.type == "maxLength"
                        ? "red"
                        : "#53B4F5",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Contraseña ..."
              />
            )}
            name="password"
          />

          {errors.password?.type == "required" && (
            <Text style={{ color: "red" }}>La contraseña es requerida</Text>
          )}
          {errors.password?.type == "pattern" && (
            <Text style={{ color: "red" }}>
              Solo letras, números y caracteres especiales
            </Text>
          )}
          {errors.password?.type == "maxLength" && (
            <Text style={{ color: "red" }}>Máximo 15 caracteres</Text>
          )}
          {errors.password?.type == "minLength" && (
            <Text style={{ color: "red" }}>Minimo 8 caracteres</Text>
          )}

          <Text style={{ color: "red" }}>{error}</Text>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#CFFFFE",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  images: {
    width: 230,
    height: 150,
    alignContent: "center",
    marginRight: 50,

  },
  inputs: {
    marginTop: 10,
    borderColor: "#4BA3DE",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    fontSize:16,
    color: "#4BA3DE",
  },
  button: {
    backgroundColor: "#4BA3DE",
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  select: {
    width: 200,
    height: 35,
    borderColor: "#4BA3DE",
    color: "#53B4F5",
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
});

export default LoginScreen;
