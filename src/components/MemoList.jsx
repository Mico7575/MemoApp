import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "./Icon";

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      >
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {
            Alert.alert("Are you sure?");
          }}
        >
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  memoListItemsTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemsDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelete: {
    padding: 8,
  },
});
