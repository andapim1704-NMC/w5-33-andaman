import { Tabs } from "expo-router";
import React from "react";

import { FontAwesome6 } from "@expo/vector-icons";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "หน้าหลัด",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="m1"
        options={{
          title: "พื้นที่สี่เหลี่ยมคางหมู",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="layer-group" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="m2"
        options={{
          title: "ดอกเบี้ยง่าย",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="minus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="m3"
        options={{
          title: "คำนวนเวลา",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="business-time" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="m4"
        options={{
          title: "คำนวนความเร็ว",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="gauge" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="m5"
        options={{
          title: "คำนวนระยะทาง",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={18} name="location-dot" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
