import {Component, OnInit} from '@angular/core';
import {PeriodicElement} from '../shared/interfaces'
import {dataJson} from '../../json/data'
import * as _ from 'lodash'


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})


export class StartPageComponent implements OnInit {
  //Переменные
  series: PeriodicElement[]
  filtredSeries: any
  premiere: string
  genre: any
  name: string
  status: any = {
    name: true,
    season: true,
    network: true,
    premiere: true
  }
  genreList = new Set()
  yearList = new Set()
  yearListSorted: any
  filters = {}

  //------------------

  constructor() {
    this.premiere = ""
    this.genre = ""
  }

  ngOnInit(): void {
    this.series = dataJson.series;
    this.applyFilters()

    //Формируем массив из текущих жанров
    this.filtredSeries.map((item) => {
      item.genre.map((innerItem) => {
        this.genreList.add(innerItem)
      })
    })
    //------------------------------------------

    //Формируем массив из текущих годов (из даты)
    this.filtredSeries.map((item) => {
      let year = new Date(item.premiere).getFullYear()
      this.yearList.add(year)
    })
    //сортируем map в порядке возрастания
    this.yearList[Symbol.iterator] = function* () {
      yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    this.yearListSorted = [...this.yearList]
    //--------------------------------------------

  }

  //Функция сборки введенных фильтров
  private applyFilters() {
    this.filtredSeries = _.filter(this.series, _.conforms(this.filters))
  }

  //Функция сортировки
  orderFilter(property: string) {
    let sorting: string
    this.status[property] == true ? sorting = 'asc' : sorting = 'desc';


    this.filtredSeries.map((item) => {
      item.premiere = new Date(item.premiere)
    })
    this.filtredSeries = _.orderBy(this.filtredSeries,
      [property],
      [sorting]
    )

    this.status[property] = !this.status[property]
  }

  //Функция фильтрации по точному совпадению
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

  //Функция фильтрации по содержанию в строке значения
  filterContain(property: string, rule: any) {
    this.filters[property] = val => val.toString().indexOf(rule) > -1
    this.applyFilters()
  }

  //Функция фильтрации по содержанию в массиве значения
  filterContainInArray(property: string, rule: any) {
    this.filters[property] = val => val.includes(rule)
    this.applyFilters()
  }

  //Функция фильтрации "больше чем введенное значение"
  filterGreaterThan(property: string, rule: any) {
    this.filters[property] = val => val > rule
    this.applyFilters()
  }

  //Функция фильтрации по критерию
  filterBoolean(property: string, rule: any) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = val => val
      this.applyFilters()
    }
  }

  //Функция очистки фильтра по значению
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = ""
    this.applyFilters()
  }

}
