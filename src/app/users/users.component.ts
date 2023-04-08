import { Component } from '@angular/core';
import { IUser } from '../Shared-Classes-and-types/IUser';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  Users?: IUser[];
  // Users?:IUser[];
  errorMessage: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.GetAllUsers().subscribe({
      next: (data) => (this.Users = data),
      error: (error) => (this.errorMessage = error),
    });
  }
}
