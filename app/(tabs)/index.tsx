import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={Styles.ui2}>
        <Text>คำนวน</Text>
      </View>
      <View style={Styles.viui}>
        <TouchableOpacity
          style={Styles.ui}
          onPress={() => router.navigate("/m1")}
        >
          <Text>
            <FontAwesome6 name="layer-group" size="50" />
          </Text>
          <Text>พื้นที่สี่เหลี่ยมคางหมู</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.ui}
          onPress={() => router.navigate("/m2")}
        >
          <Text>
            <FontAwesome6 name="minus" size="50" />
          </Text>
          <Text>ดอกเบี้ยง่าย</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.ui}
          onPress={() => router.navigate("/m3")}
        >
          <Text>
            <FontAwesome6 name="gauge" size="50" />
          </Text>
          <Text>คำนวนเวลา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.ui}
          onPress={() => router.navigate("/m4")}
        >
          <Text>
            <FontAwesome6 name="business-time" size="50" />
          </Text>
          <Text>คำนวนความเร็ว</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.ui3}
          onPress={() => router.navigate("/m4")}
        >
          <Text>
            <FontAwesome6 name="location-dot" size="50" />
          </Text>
          <Text>คำนวนระยะทาง</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  ui: {
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    width: "45%",
    height: "55%",
    paddingTop: 65,
    gap: 25,
    borderRadius: 20,
  },
  ui2: {
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    width: "100%",
    height: "10%",
    paddingTop: 10,
    marginBottom: 10,
  },
  ui3: {
    backgroundColor: "#DCDCDC",
    alignItems: "center",
    width: "94%",
    height: "20%",
    paddingTop: 10,
    borderRadius: 20,
  },
  viui: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10",
    paddingLeft: 20,
  },
});
