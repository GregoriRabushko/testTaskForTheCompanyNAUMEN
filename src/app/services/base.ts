import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base {
  getAllUsers() {
    return users;
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

export const users: User[] = [
  { id: 1, name: "Алексей Смирнов", email: "aleksey.smirnov@example.com", active: true },
  { id: 2, name: "Мария Петрова", email: "maria.petrova@example.com", active: false },
  { id: 3, name: "Дмитрий Иванов", email: "dmitriy.ivanov@example.com", active: true },
  { id: 4, name: "Анна Козлова", email: "anna.kozlova@example.com", active: true },
  { id: 5, name: "Сергей Морозов", email: "sergey.morozov@example.com", active: false },
  { id: 6, name: "Елена Волкова", email: "elena.volkova@example.com", active: true },
  { id: 7, name: "Михаил Соколов", email: "mikhail.sokolov@example.com", active: true },
  { id: 8, name: "Татьяна Лебедева", email: "tatyana.lebedeva@example.com", active: false },
  { id: 9, name: "Андрей Новиков", email: "andrey.novikov@example.com", active: true },
  { id: 10, name: "Ольга Федорова", email: "olga.fedorova@example.com", active: true },
  { id: 11, name: "Владимир Михайлов", email: "vladimir.mikhaylov@example.com", active: false },
  { id: 12, name: "Наталья Попова", email: "natalya.popova@example.com", active: true },
  { id: 13, name: "Алексей Васильев", email: "aleksey.vasilev@example.com", active: true },
  { id: 14, name: "Юлия Зайцева", email: "yuliya.zaytseva@example.com", active: false },
  { id: 15, name: "Роман Павлов", email: "roman.pavlov@example.com", active: true },
  { id: 16, name: "Светлана Семенова", email: "svetlana.semenova@example.com", active: true },
  { id: 17, name: "Игорь Голубев", email: "igor.golubev@example.com", active: false },
  { id: 18, name: "Виктория Виноградова", email: "viktoriya.vinogradova@example.com", active: true },
  { id: 19, name: "Николай Богданов", email: "nikolay.bogdanov@example.com", active: true },
  { id: 20, name: "Екатерина Воробьева", email: "ekaterina.vorobyeva@example.com", active: false },
  { id: 21, name: "Павел Андреев", email: "pavel.andreev@example.com", active: true },
  { id: 22, name: "Дарья Романова", email: "darya.romanova@example.com", active: true },
  { id: 23, name: "Максим Егоров", email: "maksim.egorov@example.com", active: false },
  { id: 24, name: "Кристина Макарова", email: "kristina.makarova@example.com", active: true },
  { id: 25, name: "Денис Филиппов", email: "denis.filippov@example.com", active: true },
  { id: 26, name: "Алина Комарова", email: "alina.komarova@example.com", active: false },
  { id: 27, name: "Артем Орлов", email: "artem.orlov@example.com", active: true },
  { id: 28, name: "Валентина Киселева", email: "valentina.kiseleva@example.com", active: true },
  { id: 29, name: "Станислав Макаров", email: "stanislav.makarov@example.com", active: false },
  { id: 30, name: "Инна Никитина", email: "inna.nikitina@example.com", active: true },
  { id: 31, name: "Виталий Захаров", email: "vitaliy.zakharov@example.com", active: true },
  { id: 32, name: "Полина Кузнецова", email: "polina.kuznetsova@example.com", active: false },
  { id: 33, name: "Евгений Белов", email: "evgeniy.belov@example.com", active: true },
  { id: 34, name: "Марина Соловьева", email: "marina.solovyeva@example.com", active: true },
  { id: 35, name: "Константин Степанов", email: "konstantin.stepanov@example.com", active: false },
  { id: 36, name: "Анастасия Николаева", email: "anastasiya.nikolaeva@example.com", active: true },
  { id: 37, name: "Олег Борисов", email: "oleg.borisov@example.com", active: true },
  { id: 38, name: "Лариса Алексеева", email: "larisa.alekseeva@example.com", active: false },
  { id: 39, name: "Вадим Григорьев", email: "vadim.grigorev@example.com", active: true },
  { id: 40, name: "Людмила Данилова", email: "lyudmila.danilova@example.com", active: true },
  { id: 41, name: "Антон Жуков", email: "anton.zhukov@example.com", active: false },
  { id: 42, name: "Вероника Фролова", email: "veronika.frolova@example.com", active: true },
  { id: 43, name: "Руслан Крылов", email: "ruslan.krylov@example.com", active: true },
  { id: 44, name: "Галина Савельева", email: "galina.savelyeva@example.com", active: false },
  { id: 45, name: "Борис Тихонов", email: "boris.tikhonov@example.com", active: true },
  { id: 46, name: "Тамара Калинина", email: "tamara.kalinina@example.com", active: true },
  { id: 47, name: "Федор Молчанов", email: "fedor.molchanov@example.com", active: false },
  { id: 48, name: "Злата Королева", email: "zlata.koroleva@example.com", active: true },
  { id: 49, name: "Глеб Медведев", email: "gleb.medvedev@example.com", active: true },
  { id: 50, name: "Софья Лукина", email: "sofya.lukina@example.com", active: false }
];
