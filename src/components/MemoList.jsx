import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Icon from "./icon";

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemsTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemsDate}>2023年4月17日 10:00</Text>
        </View>
        <View>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </View>
      </View>
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
});
