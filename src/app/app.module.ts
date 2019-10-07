import { LoginComponent } from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ContactComponent} from './contact/contact.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,MatDividerModule,MatProgressBarModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './posts/posts.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from  '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import {ErrorInterceptor} from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PostsModule } from './posts/posts.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    PortfolioComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    PostsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
               {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[ErrorComponent]
})
export class AppModule { }
