import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

const BottomPricePanel = () => {
  const [activeSection, setActiveSection] = useState(null); // 'tip', 'discount', or null

  return (
    <View style={styles.wrapper}>
      {/* İndirim Alanı */}
      <TouchableOpacity
        style={[
          styles.section,
          activeSection === 'discount' && styles.sectionExpanded,
        ]}
        onPress={() =>
          setActiveSection(activeSection === 'discount' ? null : 'discount')
        }
      >
        <Text style={styles.sectionTitle}>İndirim Uygula</Text>
        {activeSection === 'discount' && (
          <TextInput
            style={styles.input}
            placeholder="İndirim tutarı girin"
            keyboardType="numeric"
          />
        )}
      </TouchableOpacity>

      {/* Bahşiş Alanı */}
      <TouchableOpacity
        style={[
          styles.section,
          activeSection === 'tip' && styles.sectionExpanded,
        ]}
        onPress={() =>
          setActiveSection(activeSection === 'tip' ? null : 'tip')
        }
      >
        <Text style={styles.sectionTitle}>Bahşiş Ver</Text>
        {activeSection === 'tip' && (
          <TextInput
            style={styles.input}
            placeholder="Bahşiş tutarı girin"
            keyboardType="numeric"
          />
        )}
      </TouchableOpacity>

      {/* Fiyat Alanı (Sabit, tıklanmaz) */}
      <View style={styles.priceBar}>
        <Text style={styles.priceText}>Toplam: ₺250</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 4,
    padding: 14,
  },
  sectionExpanded: {
    backgroundColor: '#e0f7fa',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    marginTop: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  priceBar: {
    backgroundColor: '#222',
    padding: 18,
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 6,
  },
  priceText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BottomPricePanel;