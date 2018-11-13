import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';
import { BuscarPage } from '../pages/buscar/buscar';
import { MatematicasPage } from '../pages/matematicas/matematicas';
import { TutorPage } from '../pages/tutor/tutor';
import { ChatPage } from '../pages/chat/chat';
import { ChatTutorPage } from '../pages/chat-tutor/chat-tutor';
import { ChatActivosPage } from '../pages/chat-activos/chat-activos';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { HttpClientModule} from '@angular/common/http'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    RegistroPage,
    BuscarPage,
    MatematicasPage,
    TutorPage,
    ChatPage,
    ChatTutorPage,
    ChatActivosPage,
    OfertasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    RegistroPage,
    BuscarPage,
    MatematicasPage,
    TutorPage,
    ChatPage,
    ChatTutorPage,
    ChatActivosPage,
    OfertasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
