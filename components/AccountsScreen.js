import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ImageBackground } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

function AccountsScreen({ route }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      holderAccount: "",
      date: "",
      balance: "",
    },
  });

  const getNroAccount = () => Math.floor(Math.random() * 100);

  const [nroAccount, setNroAccount] = useState(getNroAccount());
  const [complete, setComplete] = useState(false);
  const [data, setData] = useState({});

  const onSubmit = (data) => {
    setComplete(!complete);
    setData(data);
    reset();
  };

  const handleResult = (data) => {
    return (
      <View style={{ marginTop: 20 }}>
        <Text key={data.nroAccount} style={styles.text}>
          Número de cuenta: {nroAccount}
        </Text>
        <Text key={data.nroAccount} style={styles.text}>
          Identificación: {data.id}
        </Text>
        <Text key={data.nroAccount} style={styles.text}>
          Titular de la cuenta: {data.holderAccount}
        </Text>
        <Text key={data.nroAccount} style={styles.text}>
          Fecha: {data.date}
        </Text>
        <Text key={data.nroAccount} style={styles.text}>
          Saldo: {data.balance}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: !complete ? "flex" : "none",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image style={styles.images} source={require("../assets/oing.png")} />
        <Text style={{ color: "#CFB95B", fontWeight: 700, fontSize: 32, marginTop:10}}>
          Hola {route.params.user}🤭
        </Text>
        <Text style={{ color: "#CFB95B", fontSize: 12 }}>
          Diligencia por favor el siguiente formulario
        </Text>
        <View style={styles.content}>
          <TextInput defaultValue={nroAccount} style={styles.inputs} disabled />
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 12,
              minLength: 3,
              pattern: /^[0-9]+$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.id?.type == "required" ||
                      errors.id?.type == "pattern" ||
                      errors.id?.type == "minLength" ||
                      errors.id?.type == "maxLength"
                        ? "red"
                        : "#CFB95B",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Identification ..."
              />
            )}
            name="id"
          />

          {errors.id?.type == "required" && (
            <Text style={{ color: "red" }}>La identificacion es requerida</Text>
          )}
          {errors.id?.type == "pattern" && (
            <Text style={{ color: "red" }}>Solo números</Text>
          )}
          {errors.id?.type == "maxLength" && (
            <Text style={{ color: "red" }}>Máximo 12 caracteres</Text>
          )}
          {errors.id?.type == "minLength" && (
            <Text style={{ color: "red" }}>Minimo 3 caracteres</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 20,
              minLength: 3,
              pattern: /^[A-Za-z\s]+$/g,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.holderAccount?.type == "required" ||
                      errors.holderAccount?.type == "pattern" ||
                      errors.holderAccount?.type == "minLength" ||
                      errors.holderAccount?.type == "maxLength"
                        ? "red"
                        : "#CFB95B",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Titular de la cuenta ..."
              />
            )}
            name="holderAccount"
          />

          {errors.holderAccount?.type == "required" && (
            <Text style={{ color: "red" }}>Se requiere la Cuenta Titular</Text>
          )}
          {errors.holderAccount?.type == "pattern" && (
            <Text style={{ color: "red" }}>Solo letras y/o espacios</Text>
          )}
          {errors.holderAccount?.type == "maxLength" && (
            <Text style={{ color: "red" }}>Máximo 20 caracteres</Text>
          )}
          {errors.holderAccount?.type == "minLength" && (
            <Text style={{ color: "red" }}>Minimo 3 caracteres</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/i,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.date?.type == "required" ||
                      errors.date?.type == "pattern"
                        ? "red"
                        : "#CFB95B",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Fecha (dd/mm/yy)"
              />
            )}
            name="date"
          />

          {errors.date?.type == "required" && (
            <Text style={{ color: "red" }}>La fecha es requerida</Text>
          )}
          {errors.date?.type == "pattern" && (
            <Text style={{ color: "red" }}>Solo fecha</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern:
                /^(1[0-9][0-9][0-9][0-9][0-9][0-9]|1[0-9][0-9][0-9][0-9][0-9][0-9][0-9]|100000000)$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  styles.inputs,
                  {
                    borderColor:
                      errors.balance?.type == "required" ||
                      errors.balance?.type == "pattern" ||
                      errors.balance?.type == "minLength" ||
                      errors.balance?.type == "maxLength"
                        ? "red"
                        : "#CFB95B",
                  },
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Saldo ..."
              />
            )}
            name="balance"
          />

          {errors.balance?.type == "required" && (
            <Text style={{ color: "red" }}>El saldo es requerido</Text>
          )}
          {errors.balance?.type == "pattern" && (
            <Text style={{ color: "red" }}>
              Solo números entre 1 millón y 100 millones
            </Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>Validar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ display: complete ? "flex" : "none" }}>
        <Text style={{ color: "#53B4F5", fontWeight: 700, fontSize: 30 }}>
          Buen trabajo 🤝
        </Text>
        {handleResult(data)}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setComplete(!complete)}
        >
          <Text style={styles.buttonText}>Atras</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDE2",
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 170,
    height: 140,
    marginBottom: 20,
    alignItems: "center",
  },
  inputs: {
    marginTop: 10,
    borderColor: "#CFB95B",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    color: "#8AC28B",
  },
  button: {
    backgroundColor: "#CFB95B",
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
  },
  content: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default AccountsScreen;
