import React from 'react';
import {
  StyleSheet, Text, View, Image, Pressable, SafeAreaView, StatusBar, ScrollView
} from 'react-native';
//  Agregamos ScrollView

  export default function App() {
  // Función que se ejecuta al presionar un botón
  const manejarContacto = () => {
    alert('📩 ¡Gracias por tu interés! (brunocalzado07@gmail.com)');
  };

 return (
  <SafeAreaView style={styles.container}>
   <StatusBar barStyle="dark-content" />

    {/* ScrollView: permite scroll si el contenido es largo */}
    <ScrollView contentContainerStyle={styles.scrollContent}>

    {/* SECCIÓN: Foto de perfil */}
    <View style={styles.photoContainer}>
      <Image
        source={{ uri:'https://avatars.githubusercontent.com/u/324222967?s=64&v=4' }}
        style={styles.photo}
      />
    </View>
    {/* 👤 Información personal */}
    <View style={styles.infoContainer}>
      <Text style={styles.name}>Bruno Calzado García</Text>
      <Text style={styles.title}>Estudiante de Lenguaje de Programación IV</Text>
      <Text style={styles.bio}>
        🚀 Aprendiendo apps móviles con Expo.{'\n'}
        💡 Mi meta: crear algo útil.
      </Text>
    </View>

    {/* 🏷️ Habilidades (badges) */}
    <View style={styles.skillsContainer}>
      <Text style={styles.sectionTitle}>Mis habilidades</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>✨ React Native</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>🎨 Diseño UI</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>🐳 Docker</Text>
      </View>

    <View style={styles.badge}>
      <Text style={styles.badgeText}>📱 Expo Go</Text>
    </View>    

    <View style={styles.badge}>
        <Text style={styles.badgeText}>🧠 Lógica de programación</Text>
      </View>

  </View>

        {/* 🔗 Botones de acción */}
    <View style={styles.actionsContainer}>

      {/* Botón principal: Contáctame */}
      <Pressable style={styles.buttonPrimary} onPress={manejarContacto}>
        <Text style={styles.buttonPrimaryText}>📩 Contáctame</Text>
      </Pressable>

      {/* Botón secundario: Portafolio */}
      <Pressable
        style={styles.buttonSecondary}
        onPress={() => alert('🔗 Próximamente: mi portafolio')}
      >
        <Text style={styles.buttonSecondaryText}>🌐 Mi portafolio</Text>
      </Pressable>


      
  </View>
          {/* 🙏 Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Creado con ❤️ en Snack.expo.dev{'\n'}
          📅 {new Date().getFullYear()}
        </Text>
      </View>

    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    // backgroundColor: '#E8F5E9', //  Verde suave
    // backgroundColor: '#FFF3E0', //  Naranja suave
     backgroundColor: '#E3F2FD', //  Azul suave
  },

  // ESTILOS PARA SCROLLVIEW
  scrollContent: {
    paddingBottom: 30, 
  },

  // ESTILOS PARA LA FOTO
  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,          
    height: 100,          
    borderRadius: 50,     
    borderWidth: 4,       
    borderColor: '#2196F3',
  },

  // ESTILOS PARA EL NOMBRE
  name: {
    fontSize: 28,         
    fontWeight: 'bold',   
    color: '#1a1a1a',     
    marginBottom: 8,     
  },

  // INFORMACIÓN PERSONAL
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,  
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#2196F3',       
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666666',      
    textAlign: 'center',    
    lineHeight: 20,         
  },

  // HABILIDADES (BADGES)
  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD', 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,       
    marginBottom: 8,
    alignSelf: 'flex-start',    
  },
  badgeText: {
    fontSize: 14,
    color: '#1565C0',      
    fontWeight: '500',
  },

  //  BOTONES DE ACCIÓN
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  buttonPrimary: {
    paddingVertical: 18,        
    paddingHorizontal: 32, 
    backgroundColor: '#2196F3', 
    borderRadius: 12,          
    alignItems: 'center',       
  },
  buttonPrimaryText: {
    color: '#ffffff',           
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff', 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,             
    borderColor: '#2196F3',    
  },
  buttonSecondaryText: {
    color: '#2196F3',        
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

