import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                background: '#3498db', // Primary color
                primary: '#3498db', // Primary color
                secondary: '#424242', // Secondary color
                accent: '#82B1FF', // Accent color
                error: '#FF5252', // Error color
                info: '#2196F3', // Info color
                success: '#4CAF50', // Success color
                warning: '#FFC107', // Warning color
            },
        },
    },
})

export default vuetify;
