import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  user: User | undefined | any;
  total: number | undefined | any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getBalance().subscribe((user) => {
      // console.log(user);
      this.user = user;

      console.log(user.bought);
      console.log(user.sold);
      let sumB = 0;
      let sumS = 0;

      for (let i = 0; i < user.bought.length; i++) {
        let pr: string = user.bought[i];
        console.log(pr);

        const userB = Number(pr.split(' | ').slice(2,3).toString()) * Number(pr.split(' | ').slice(3,4).toString());
        sumB =+ userB;
        console.log(sumB);
      }

      for (let i = 0; i < user.sold.length; i++) {
        let pr: string = user.sold[i];
        console.log(pr);

        const userS = Number(pr.split(' | ').slice(2,3).toString()) * Number(pr.split(' | ').slice(3,4).toString());
        sumS =+ userS;
        console.log(sumS);
      }

      this.total = sumS - sumB;
      console.log(this.total);

    });



    // const id = this.activatedRoute.snapshot.params['ideaId'];
    // console.log(id);

    // this.ideaService.getIdea(id).subscribe((idea) => {
    //   this.idea = idea;
    //   console.log({ idea });

    //   const cookie = this.cookieService.get('cookie');

    //   if (cookie) {
    //     this.checkOwner(cookie);
    //   } else {
    //     this.isOwner = true; //after auth REMOVE!!!! replace with isLogged type thing
    //   }
    // });
  }
}
