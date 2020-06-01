const statistics = () => {
    const table = document.createElement('div');

    table.innerHTML = `
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Action (set A)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
            cry
            (плакать)
        </th>
        <td>${localStorage.getItem('cry')}</td>
      </tr>
      <tr>
        <th scope="row">dance(танцевать)</th>
        <td>${localStorage.getItem('dance')}</td>
      </tr>
      <tr>
        <th scope="row">dive(нырять)</th>
        <td>${localStorage.getItem('dive')}</td>
      </tr>
      <tr>
        <th scope="row">draw(рисовать)</th>
        <td>${localStorage.getItem('draw')}</td>
      </tr>
      <tr>
        <th scope="row">fish(ловить рыбу)</th>
        <td>${localStorage.getItem('fish')}</td>
      </tr>
      <tr>
        <th scope="row">fly(летать)</th>
        <td>${localStorage.getItem('fly')}</td>
      </tr>
      <tr>
        <th scope="row">hug(обнимать)</th>
        <td>${localStorage.getItem('hug')}</td>
      </tr>
      <tr>
        <th scope="row">jump(прыгать)</th>
        <td>${localStorage.getItem('jump')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Action (set B)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">open(открывать)</th>
        <td>${localStorage.getItem('open')}</td>
      </tr>
      <tr>
        <th scope="row">play(играть)</th>
        <td>${localStorage.getItem('play')}</td>
      </tr>
      <tr>
        <th scope="row">point(указывать)</th>
        <td>${localStorage.getItem('point')}</td>
      </tr>
      <tr>
        <th scope="row">ride(ездить)</th>
        <td>${localStorage.getItem('ride')}</td>
      </tr>
      <tr>
        <th scope="row">run(бегать)</th>
        <td>${localStorage.getItem('run')}</td>
      </tr>
      <tr>
        <th scope="row">sing(петь)</th>
        <td>${localStorage.getItem('sing')}</td>
      </tr>
      <tr>
        <th scope="row">skip(пропускать, прыгать)</th>
        <td>${localStorage.getItem('skip')}</td>
      </tr>
      <tr>
        <th scope="row">swim(плавать)</th>
        <td>${localStorage.getItem('swim')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Action (set C)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">argue(спорить)</th>
        <td>${localStorage.getItem('argue')}</td>
      </tr>
      <tr>
        <th scope="row">build(строить)</th>
        <td>${localStorage.getItem('build')}</td>
      </tr>
      <tr>
        <th scope="row">carry(нести)</th>
        <td>${localStorage.getItem('carry')}</td>
      </tr>
      <tr>
        <th scope="row">catch(ловить)</th>
        <td>${localStorage.getItem('catch')}</td>
      </tr>
      <tr>
        <th scope="row">drive(водить машину)</th>
        <td>${localStorage.getItem('drive')}</td>
      </tr>
      <tr>
        <th scope="row">drop(падать)</th>
        <td>${localStorage.getItem('drop')}</td>
      </tr>
      <tr>
        <th scope="row">pull(тянуть)</th>
        <td>${localStorage.getItem('pull')}</td>
      </tr>
      <tr>
        <th scope="row">push(толкать)</th>
        <td>${localStorage.getItem('push')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Adjective</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">big(большой)</th>
        <td>${localStorage.getItem('big')}</td>
      </tr>
      <tr>
        <th scope="row">small(маленький)</th>
        <td>${localStorage.getItem('small')}</td>
      </tr>
      <tr>
        <th scope="row">fast(быстрый)</th>
        <td>${localStorage.getItem('fast')}</td>
      </tr>
      <tr>
        <th scope="row">slow(медленный)</th>
        <td>${localStorage.getItem('slow')}</td>
      </tr>
      <tr>
        <th scope="row">friendly(дружелюбный)</th>
        <td>${localStorage.getItem('friendly')}</td>
      </tr>
      <tr>
        <th scope="row">unfriendly(недружелюбный)</th>
        <td>${localStorage.getItem('unfriendly')}</td>
      </tr>
      <tr>
        <th scope="row">young(молодой)</th>
        <td>${localStorage.getItem('young')}</td>
      </tr>
      <tr>
        <th scope="row">old(старый)</th>
        <td>${localStorage.getItem('old')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Animal (set A)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">cat(кот)</th>
        <td>${localStorage.getItem('cat')}</td>
      </tr>
      <tr>
        <th scope="row">chick(цыплёнок)</th>
        <td>${localStorage.getItem('chick')}</td>
      </tr>
      <tr>
        <th scope="row">chicken(курица)</th>
        <td>${localStorage.getItem('chicken')}</td>
      </tr>
      <tr>
        <th scope="row">dog(собака)</th>
        <td>${localStorage.getItem('dog')}</td>
      </tr>
      <tr>
        <th scope="row">horse(лошадь)</th>
        <td>${localStorage.getItem('horse')}</td>
      </tr>
      <tr>
        <th scope="row">pig(свинья)</th>
        <td>${localStorage.getItem('pig')}</td>
      </tr>
      <tr>
        <th scope="row">rabbit(кролик)</th>
        <td>${localStorage.getItem('rabbit')}</td>
      </tr>
      <tr>
        <th scope="row">sheep(овца)</th>
        <td>${localStorage.getItem('sheep')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Animal (set B)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">bird(птица)</th>
        <td>${localStorage.getItem('bird')}</td>
      </tr>
      <tr>
        <th scope="row">fish(рыба)</th>
        <td>${localStorage.getItem('fish')}</td>
      </tr>
      <tr>
        <th scope="row">frog(жаба)</th>
        <td>${localStorage.getItem('frog')}</td>
      </tr>
      <tr>
        <th scope="row">giraffe(жираф)</th>
        <td>${localStorage.getItem('giraffe')}</td>
      </tr>
      <tr>
        <th scope="row">lion(лев)</th>
        <td>${localStorage.getItem('lion')}</td>
      </tr>
      <tr>
        <th scope="row">mouse(мышь)</th>
        <td>${localStorage.getItem('mouse')}</td>
      </tr>
      <tr>
        <th scope="row">turtle(черепаха)</th>
        <td>${localStorage.getItem('turtle')}</td>
      </tr>
      <tr>
        <th scope="row">dolphin(дельфин)</th>
        <td>${localStorage.getItem('dolphin')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Clothes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">skirt(юбка)</th>
        <td>${localStorage.getItem('skirt')}</td>
      </tr>
      <tr>
        <th scope="row">pants(брюки)</th>
        <td>${localStorage.getItem('pants')}</td>
      </tr>
      <tr>
        <th scope="row">blouse(блузка)</th>
        <td>${localStorage.getItem('blouse')}</td>
      </tr>
      <tr>
        <th scope="row">dress(платье)</th>
        <td>${localStorage.getItem('dress')}</td>
      </tr>
      <tr>
        <th scope="row">boot(ботинок)</th>
        <td>${localStorage.getItem('boot')}</td>
      </tr>
      <tr>
        <th scope="row">shirt(рубашка)</th>
        <td>${localStorage.getItem('shirt')}</td>
      </tr>
      <tr>
        <th scope="row">coat(пальто)</th>
        <td>${localStorage.getItem('coat')}</td>
      </tr>
      <tr>
        <th scope="row">shoe(туфли)</th>
        <td>${localStorage.getItem('shoe')}</td>
    </tr>
    </tbody>
    </table>

    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Emotion</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">sad(грустный)</th>
        <td>${localStorage.getItem('sad')}</td>
      </tr>
      <tr>
        <th scope="row">angry(сердитый)</th>
        <td>${localStorage.getItem('angry')}</td>
      </tr>
      <tr>
        <th scope="row">happy(счастливый)</th>
        <td>${localStorage.getItem('happy')}</td>
      </tr>
      <tr>
        <th scope="row">tired(уставший)</th>
        <td>${localStorage.getItem('tired')}</td>
      </tr>
      <tr>
        <th scope="row">surprised(удивлённый)</th>
        <td>${localStorage.getItem('surprised')}</td>
      </tr>
      <tr>
        <th scope="row">scared(испуганный)</th>
        <td>${localStorage.getItem('scared')}</td>
      </tr>
      <tr>
        <th scope="row">smile(улыбка)</th>
        <td>${localStorage.getItem('smile')}</td>
      </tr>
      <tr>
        <th scope="row">laugh(смех)</th>
        <td>${localStorage.getItem('laugh')}</td>
    </tr>
    </tbody>
    </table>
    `
    return table
}


export default statistics;