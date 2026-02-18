import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cal() {
  const router = useRouter();
  const [D, setD] = useState(0);
  const [S, setS] = useState(0);
  const [area, setarea] = useState(0);

  // เก็บประวัติ
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  function ed() {
    var TrapezoidArea = D / S;
    setarea(TrapezoidArea);
    saveHistory(TrapezoidArea);
  }

  async function saveHistory(result: number) {
    const text = `${D}/${S} = ${result}`;
    const newData = [...history, text];

    setHistory(newData);
    await AsyncStorage.setItem("calHistory", JSON.stringify(newData));
  }

  async function loadHistory() {
    const data = await AsyncStorage.getItem("calHistory");
    setHistory(data ? JSON.parse(data) : []);
  }

  async function clearHistory() {
    await AsyncStorage.removeItem("calHistory");
    setHistory([]);
  }

  return (
    <SafeAreaView style={Styles.uiSAV}>
      <ImageBackground
        source={{
          uri: `https://marketplace.canva.com/EAELaJE74ws/1/0/1600w/canva-%E0%B9%81%E0%B8%9A%E0%B9%87%E0%B8%84%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%80%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87-%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%81%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%81%E0%B8%9A%E0%B9%88%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89-%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%97%E0%B8%A3%E0%B8%87-%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%B5%E0%B8%9E%E0%B8%B2%E0%B8%AA%E0%B9%80%E0%B8%97%E0%B8%A5-QtT8k-4WQ7k.jpg`,
        }}
        style={Styles.uiPng}
      >
        <View style={Styles.uiV1}>
          <Text style={Styles.uiText3}>คำนวนเวลา</Text>

          <TextInput
            style={Styles.uiTI1}
            placeholderTextColor={"#000000"}
            placeholder="กรอกระยะทาง"
            onChangeText={(e) => setD(Number(e))}
          />
          <TextInput
            style={Styles.uiTI1}
            placeholderTextColor={"#000000"}
            placeholder="กรอกความเร็ว"
            onChangeText={(e) => setS(Number(e))}
          />
          <Text style={Styles.uiText1}>
            {D} km ÷ {S} km/h = {area} h
          </Text>

          <TouchableOpacity style={Styles.uiTOnp} onPress={() => ed()}>
            <Text style={Styles.uiText2}>กดคำนวน</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={clearHistory}>
            <Text style={{ color: "red" }}>ลบประวัติ</Text>
          </TouchableOpacity>

          <ScrollView style={{ width: "90%", marginTop: 10 }}>
            {history.map((item, index) => (
              <Text key={index}>• {item}</Text>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  uiSAV: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: "100%",
  },
  uiV1: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "70%",
    height: "60%",
    borderRadius: 20,
    gap: 10,
    borderColor: "#000000",
    borderWidth: 0.1,
  },
  uiV2: {
    alignItems: "center",
    backgroundColor: "#98FB98",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  uiTI1: {
    borderColor: "#000000",
    color: "#000000",
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 5,
    width: "80%",
  },
  uiTOnp: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#33FFFF",
    width: "50%",
    height: "15%",
    borderRadius: 30,
  },
  uiText1: {
    fontSize: 17,
    fontWeight: 900,
  },
  uiText2: {
    fontSize: 20,
    fontWeight: 800,
  },
  uiText3: {
    fontSize: 20,
    fontWeight: 800,
  },
  uiPng: {
    width: "100%",
    height: "110%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});

//15
